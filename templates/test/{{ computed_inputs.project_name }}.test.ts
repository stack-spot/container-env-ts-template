import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {{ computed_inputs.app_class_name }}Stack from '../lib/{{ computed_inputs.project_name }}-stack';

test('{{ computed_inputs.app_class_name }}Stack has ECS service', () => {
  const app = new App();
  const stack = new {{ computed_inputs.app_class_name }}Stack(app, '{{ computed_inputs.app_class_name }}Stack');
  const template = Template.fromStack(stack);

  template.hasResource('AWS::ECS::Service', {});
});

test('{{ computed_inputs.app_class_name }}Stack has ECS task definition', () => {
  const app = new App();
  const stack = new {{ computed_inputs.app_class_name }}Stack(app, '{{ computed_inputs.app_class_name }}Stack');
  const template = Template.fromStack(stack);

  template.hasResource('AWS::ECS::TaskDefinition', {});
});

test('{{ computed_inputs.app_class_name }}Stack has VPC', () => {
  const app = new App();
  const stack = new {{ computed_inputs.app_class_name }}Stack(app, '{{ computed_inputs.app_class_name }}Stack');
  const template = Template.fromStack(stack);

  template.hasResource('AWS::EC2::VPC', {});
});
