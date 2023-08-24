import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as cdk from 'aws-cdk-lib';

export class CloudfrontBlueGreenStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'BlueGreenDistribution', {
      originConfigs: [
        {
          customOriginSource: {
            domainName: 'z94v0b7g32.execute-api.eu-central-1.amazonaws.com',
            originPath: '/prod',
          },
          behaviors: [ {isDefaultBehavior: true}],        },
      ],
    });

    new cdk.CfnOutput(this, 'BlueGreenDistributionId', {
      value: distribution.distributionDomainName,
    });

  }  
}