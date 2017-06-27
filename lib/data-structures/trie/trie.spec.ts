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
        trie.getTrie().value.should.eql('');
        trie.getTrie().children['t'].value.should.eql('t');
        trie.getTrie().children['t'].children['e'].value.should.eql('e');
        trie.getTrie().children['t'].children['e'].children['n'].value.should.eql('n');
        trie.getTrie().children['t'].children['e'].children['n'].children['t'].value.should.eql('t');

        trie.getTrie().children['t'].children['h'].value.should.eql('h');
        trie.getTrie().children['t'].children['h'].children['e'].value.should.eql('e');

        trie.getTrie().children['t'].isWord.should.eql(false);
        trie.getTrie().children['t'].children['e'].isWord.should.eql(false);
        trie.getTrie().children['t'].children['e'].children['n'].isWord.should.eql(true);
        trie.getTrie().children['t'].children['e'].children['n'].children['t'].isWord.should.eql(true);

        trie.getTrie().children['t'].children['h'].isWord.should.eql(false);
        trie.getTrie().children['t'].children['h'].children['e'].isWord.should.eql(true);
    });

    it('should find words', () => {
        trie.find('t').length.should.eql(3);
        trie.find('te').length.should.eql(2);
        trie.find('th').length.should.eql(1);

        console.log(trie.find('t'));
    });
});