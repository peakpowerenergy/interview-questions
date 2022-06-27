# helm-deployment

Create a Helm chart that allows us to deploy the same application with different configuration.

## Background

We want to setup a system in which we can deploy copies of our application stack for each of our customers, so that they can have their own isolated deployments. As part of this effort, you will be creating a Helm chart for the widget-api app.

## Prerequisites

- You have installed the following applications:
  - [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)
  - [helm](https://helm.sh)
  - A Kubernetes cluster using `minikube` or Docker Desktop for Mac/Windows.
    - **Note**: Kubernetes v1.22+ comes with `containerd` by default, which can only read container images, **not build them!**
      - Instructions for minikube: https://minikube.sigs.k8s.io/docs/drivers/docker/#usage
      - Docker Desktop for Mac/Windows uses Docker as a default for its Kubernetes cluster, so this should not be an issue
- You have cloned this repository to your own machine **OR** a "workbench" machine you'll be connecting to in order to run your commands.
  - Examples include setting up a VM, using your own local OS and environment, etc.
  - Using one of the Kubernetes nodes is **not** an acceptable workbench!

## Goals

- Modify the templates so that they include annotations provided within the [Values File](https://helm.sh/docs/chart_template_guide/values_files/).
  - For brevity, they may share the same annotations section in the [Values File](https://helm.sh/docs/chart_template_guide/values_files/), rather than having their own separate sections
- Modify the templates to include all of the ports that the application requires.
- Make any necessary changes to allow passing configuration or environment variables the application requires.
  - Any environment variables the app uses will be documented inside of README.md 
- Deploy the application to your Kubernetes cluster and then perform a series of tests you think is appropriate to validate that the application works as expected.
  - You must make a namespace for your deployment!
