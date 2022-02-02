#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {{ computed_inputs.app_class_name }}Stack from '../lib/{{ computed_inputs.project_name }}-stack';

const app = new cdk.App();
new {{ computed_inputs.app_class_name }}Stack(app, '{{ computed_inputs.app_class_name }}Stack', {
  env: {
    account: process.env.AWS_TARGET_ACCOUNT,
    region: process.env.AWS_REGION,
  },
});
