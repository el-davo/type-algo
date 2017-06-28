import { Trie } from './trie';

describe('Trie', () => {

    let trie: Trie;

    beforeEach(() => {
        trie = new Trie();

        trie.addWord('tent');
        trie.addWord('ten');
        trie.addWord('the');
    });

    it('should add words to the trie', () => {
        trie.getTrie().getValue().should.eql('');
        trie.getTrie().getChildren()['t'].getValue().should.eql('t');
        trie.getTrie().getChildren()['t'].getChildren()['e'].getValue().should.eql('e');
        trie.getTrie().getChildren()['t'].getChildren()['e'].getChildren()['n'].getValue().should.eql('n');
        trie.getTrie().getChildren()['t'].getChildren()['e'].getChildren()['n'].getChildren()['t'].getValue().should.eql('t');

        trie.getTrie().getChildren()['t'].getChildren()['h'].getValue().should.eql('h');
        trie.getTrie().getChildren()['t'].getChildren()['h'].getChildren()['e'].getValue().should.eql('e');

        trie.getTrie().getChildren()['t'].isWord().should.eql(false);
        trie.getTrie().getChildren()['t'].getChildren()['e'].isWord().should.eql(false);
        trie.getTrie().getChildren()['t'].getChildren()['e'].getChildren()['n'].isWord().should.eql(true);
        trie.getTrie().getChildren()['t'].getChildren()['e'].getChildren()['n'].getChildren()['t'].isWord().should.eql(true);

        trie.getTrie().getChildren()['t'].getChildren()['h'].isWord().should.eql(false);
        trie.getTrie().getChildren()['t'].getChildren()['h'].getChildren()['e'].isWord().should.eql(true);
    });

    it('should find words', () => {
        trie.find('t').length.should.eql(3);
        trie.find('te').length.should.eql(2);
        trie.find('th').length.should.eql(1);

        trie.find('t').should.eql(['the', 'tent', 'ten']);
        trie.find('te').should.eql(['tent', 'ten']);
        trie.find('th').should.eql(['the']);
        trie.find('tent').should.eql(['tent']);
    });
});