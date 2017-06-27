interface Children {
    [key: string]: TrieNode;
}

class TrieNode {
    value: string;
    isWord: boolean;
    children: Children;

    constructor(value: string, isWord: boolean) {
        this.children = {};
        this.value = value;
        this.isWord = isWord;
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
        let chars = word.split('');
        let currNode = this.root;

        for (let i = 0; i < word.length; i++) {

            // Node does not exist so create it
            if (!currNode.children[word[i]]) {
                currNode.children[word[i]] = new TrieNode(word[i], i == word.length - 1);
            }

            // Go to next depth
            currNode = currNode.children[word[i]];

            // Check if this is a complete word
            if (i == word.length - 1) {
                currNode.isWord = true;
            }
        }
    }

    find(word: string): string[] {
        let node = this.root;
        let output: string[] = [];

        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) {
                node = node.children[word[i]];
            } else {
                return output;
            }
        }

        this.findAllWords(node, output);

        return output;
    }

    private findAllWords(node: TrieNode, arr: string[]) {
        if (node.isWord) {
            arr.unshift(node.value);
        }

        for (let child in node.children) {
            this.findAllWords(node.children[child], arr);
        }
    }
}