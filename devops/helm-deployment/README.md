# helm-deployment

Create a Helm chart that allows us to deploy the same application with different configuration.

## Background

We want to setup a system in which we can deploy copies of our application stack for each of our customers, so that they can have their own isolated deployments. As part of this effort, you will be creating a Helm chart for the working-title app.

## Prerequisites

- Kubernetes and kubectl are installed on your machine
- You have cloned this repository to your machine

## Goals

1. Modify the templates so that they include annotations provided within the [Values File](https://helm.sh/docs/chart_template_guide/values_files/).
  - For brevity, they may share the same annotations section in the [Values File](https://helm.sh/docs/chart_template_guide/values_files/), rather than having their own separate sections
2. Modify the templates to include all of the ports that the application requires.
3. Make any necessary changes to allow passing configuration or environment variables the application requires.
  - Any environment variables the app uses will be documented inside of README.md 
4. Deploy the application to your Kubernetes cluster and then perform a series of tests you think is appropriate to validate that the application works as expected.
  - You must make a namespace for your deployment!
5. Deploy a copy of the application for a group of customers.
  - This is a list of the company names, and the corresponding namespaces you should create:
    - FooCorp (foo-corp)
    - BarLtd (bar-ltd)
    - BazIndustries (baz-industries)
  - You may assume [Values File](https://helm.sh/docs/chart_template_guide/values_files/)s are encrypted-at-rest and consumed securely (you can put secret info in there for this test)
  - Each deployment should have its own [Values File](https://helm.sh/docs/chart_template_guide/values_files/).
