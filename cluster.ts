import { Provider } from "@pulumi/kubernetes";

// Create a Kubernetes provider instance that uses our cluster from above.
export const clusterProvider = new Provider('cluster-provider', {
    context: 'orbstack',  // kubeconfig,
    enableConfigMapMutable: true,
    enableServerSideApply: true,
    kubeClientSettings: {
        qps: 100,
        burst: 100,
    },
});

