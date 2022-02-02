import { Stack, StackProps } from 'aws-cdk-lib';
import { SubnetType } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { ContainerEnvComponent } from '@stackspot/cdk-env-container';
import { VpcEnvComponent } from '@stackspot/cdk-env-vpc';

class {{ computed_inputs.app_class_name }}Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpcEnvComponent = new VpcEnvComponent(this, '{{ computed_inputs.app_class_name }}Vpc', {
      {% if inputs.container_has_vpc %}
      subnetsIds: [
        {% set subnet_ids = inputs.container_subnet_ids.replace(' ', '').split(',') %}
        {% for subnet_id in subnet_ids %}
        '{{ subnet_id }}',
        {% endfor %}
      ],
      subnetsType: SubnetType.{{ inputs.container_subnet_type }},
      vpcDefault: {% if inputs.vpc_default %}true{% else %}false{% endif %},
      {% if not inputs.vpc_default %}
      vpcId: '{{ inputs.container_vpc_id }}',
      {% endif %}
      vpcRegion: '{{ inputs.vpc_region }}',
      {% else %}
      vpcCidr: '{{ inputs.container_vpc_cidr }}',
      vpcMaxAzs: {{ inputs.vpc_max_azs }},
      vpcName: '{{ inputs.vpc_name }}',
      {% endif %}
    });

    new ContainerEnvComponent(this, '{{ computed_inputs.app_class_name }}Container', {
      clusterName: '{{ computed_inputs.app_class_name }}Cluster',
      containerInsights: {% if inputs.container_insights %}true{% else %}false{% endif %},
      ingressIpv4Source: [
        {% set ingress_ipv4_sources = inputs.container_ingress_ipv4_sources.replace(' ', '').split(',') %}
        {% for ingress_ipv4_source in ingress_ipv4_sources %}
        '{{ ingress_ipv4_source }}',
        {% endfor %}
      ],
      internetFacing: {% if inputs.internet_facing %}true{% else %}false{% endif %},
      sampleApp: {% if inputs.sample_app %}true{% else %}false{% endif %},
      subnets: vpcEnvComponent.subnets,
      vpc: vpcEnvComponent.vpc,
    });
  }
}

export default {{ computed_inputs.app_class_name }}Stack;
