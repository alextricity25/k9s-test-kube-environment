import { core } from '@pulumi/kubernetes';
import { clusterProvider } from './cluster';

for (let i = 0; i < 10; i++) {
    const suffix = i + 1;
    const namespaceName = `test-${suffix}`;

    new core.v1.Namespace(namespaceName, {
        metadata: {
            name: namespaceName,
            labels: {
                'managed-by': 'pulumi',
                'type': 'flow'
            },
        },
    }, {
        provider: clusterProvider,
    });
}

// Create additional namespaces with "pipe" label
const pipeNamespaceNames = ['pipe-1', 'pipe-2'];
pipeNamespaceNames.forEach((name) => {
    new core.v1.Namespace(name, {
        metadata: {
            name: name,
            labels: {
                'managed-by': 'pulumi',
                'type': 'pipe'
            },
        },
    }, {
        provider: clusterProvider,
    });
});

// Create additional namespaces with "flow" label
const flowNamespaceNames = ['flow-1', 'flow-2'];
flowNamespaceNames.forEach((name) => {
    new core.v1.Namespace(name, {
        metadata: {
            name: name,
            labels: {
                'managed-by': 'pulumi',
                'type': 'flow'
            },
        },
    }, {
        provider: clusterProvider,
    });
});
