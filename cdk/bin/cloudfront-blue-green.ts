#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CloudfrontBlueGreenStack } from '../lib/cloudfront-blue-green-stack';

const app = new cdk.App();
new CloudfrontBlueGreenStack(app, 'CloudfrontBlueGreenStack');
