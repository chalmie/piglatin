
describe("makeArray", function() {
  it("returns an array of the letters of a given word", function() {
    expect(makeArray("happy")).to.eql([ "h", "a", "p", "p", "y" ]);
  });
});

// describe("isVowel",function() {
//   it("returns true for a word beginning with a vowel", function() {
//     expect(isVowel("unusual")).to.equal(true);
//   });
//   it("returns false for a word not beginning with a vowel", function() {
//   expect(isVowel("carrot")).to.equal(false);
//   });
// });
//
// describe("pigLatin", function() {
//   it("adds 'ay' to the end of a word beginning with a vowel", function(){
//     expect(pigLatin("and")).to.equal("anday");
//   });
//   it("removes first letter and appends it to the end of the word, along with 'ay'", function(){
//     expect(pigLatin("bus")).to.equal("usbay");
//   });
//   it("removes first two letters and appends them to the end of the word, along with 'ay'", function(){
//     expect(pigLatin("train")).to.equal("aintray");
//   });
//   it("removes first three letters and appends them to the end of the word, along with 'ay'", function(){
//     expect(pigLatin("three")).to.equal("eethray");
//   });
//   it("removes first four letters and appends them to the end of the word, along with 'ay'", function(){
//     expect(pigLatin("mystery")).to.equal("erymystay");
//   });
//   it("removes first five letters and appends them to the end of the word, along with 'ay'", function(){
//     expect(pigLatin("bcdfgein")).to.equal("einbcdfgay");
//   });
// });
