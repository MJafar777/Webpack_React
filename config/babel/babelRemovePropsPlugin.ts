import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];

                console.log(forbidden, 'hello world!');

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
