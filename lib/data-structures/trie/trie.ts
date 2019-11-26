interface Children {
    [key: string]: TrieNode;
}

class TrieNode {
    private value: string;
    private word: boolean;
    private parent: TrieNode;
    private children: Children;

    constructor(value: string, isWord: boolean) {
        this.children = {};
        this.value = value;
        this.word = isWord;
    }

    getValue(): string {
        return this.value;
    }

    isWord(): boolean {
        return this.word;
    }

    getParent(): TrieNode {
        return this.parent;
    }

    getChildren() {
        return this.children;
    }

    setParent(parent: TrieNode) {
        this.parent = parent;
    }

    setIsWord(isWord: boolean) {
        this.word = isWord;
    }

    getWord() {
        let output = '';
        let node: TrieNode = this;

        while (node) {
            output = node.getValue() + output;
            node = node.getParent();
        }

        return output;
    }
}

export class Trie {

    private root: TrieNode;

    constructor() {
        this.root = new TrieNode('', false);
    }

    getTrie() {
        return this.root;
    }

    addWord(word: string) {
        let currNode = this.root;

        for (let i = 0; i < word.length; i++) {

            // Node does not exist so create it
            if (!currNode.getChildren()[word[i]]) {
                currNode.getChildren()[word[i]] = new TrieNode(word[i], i === word.length - 1);

                currNode.getChildren()[word[i]].setParent(currNode);
            }

            // Go to next depth
            currNode = currNode.getChildren()[word[i]];

            // Check if this is a complete word
            if (i === word.length - 1) {
                currNode.setIsWord(true);
            }
        }
    }

    find(word: string): string[] {
        let node = this.root;
        const output: string[] = [];

        for (const letter of word) {
            if (node.getChildren()[letter]) {
                node = node.getChildren()[letter];
            } else {
                return output;
            }
        }

        this.findAllWords(node, output);

        return output;
    }

    private findAllWords(node: TrieNode, arr: string[]) {
        if (node.isWord()) {
            arr.unshift(node.getWord());
        }

        for (const child of Object.keys(node.getChildren())) {
            this.findAllWords(node.getChildren()[child], arr);
        }
    }
}
