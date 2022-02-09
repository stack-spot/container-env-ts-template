# container-env-ts-template

[![version][badge-version]][releases]
[![license][badge-license]][license]

Template to create a container environment.

## IAM Least privilege

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "cloudformation:Describe*",
                "cloudformation:List*",
                "cloudformation:Get*"
            ],
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::cdktoolkit-stagingbucket-*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "ssm:GetParameters",
                "ecs:DescribeClusters",
                "ecs:CreateCluster",
                "ecs:DeleteCluster",
                "ec2:CreateTags",
                "ec2:CreateVpc",
                "ec2:CreateSubnet",
                "ec2:CreateRouteTable",
                "ec2:CreateRoute",
                "ec2:CreateInternetGateway",
                "ec2:CreateNatGateway",
                "ec2:DescribeVpcs",
                "ec2:DescribeNatGateways",
                "ec2:DescribeAddresses",
                "ec2:DescribeSubnets",
                "ec2:DescribeRouteTables",
                "ec2:DescribeAvailabilityZones",
                "ec2:DescribeInternetGateways",
                "ec2:AttachInternetGateway",
                "ec2:allocateAddress",
                "ec2:AssociateRouteTable",
                "ec2:ModifyVpcAttribute",
                "ec2:ModifySubnetAttribute",
                "ec2:ReplaceRoute",
                "ec2:DeleteRoute",
                "ec2:DeleteVpc",
                "ec2:DeleteTags",
                "ec2:DeleteSubnet",
                "ec2:DeleteInternetGateway",
                "ec2:DeleteRouteTable",
                "ec2:DetachInternetGateway",
                "ec2:DeleteNatGateway",
                "ec2:releaseAddress",
                "ec2:DisassociateRouteTable"
            ],
            "Resource": "*",
            "Effect": "Allow"
        }
    ]
}
```

## Development

### Prerequisites

- [EditorConfig][editorconfig] (Optional)
- [Git][git]
- [Node.js 16][nodejs]

[badge-license]: https://img.shields.io/github/license/stack-spot/container-env-ts-template
[badge-version]: https://img.shields.io/github/v/tag/stack-spot/container-env-ts-template?include_prereleases
[editorconfig]: https://editorconfig.org/
[git]: https://git-scm.com/downloads
[license]: https://github.com/stack-spot/container-env-ts-template/blob/main/LICENSE
[nodejs]: https://nodejs.org/en/download/
[releases]: https://github.com/stack-spot/container-env-ts-template/releases
