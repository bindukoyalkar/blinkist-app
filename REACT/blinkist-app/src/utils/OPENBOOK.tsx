const currentBooksData=`{"books":[{"id":1,"src":"1.png","name":"Bring Your Human to Work",
"author":"Erica Keswin","duration":"13"},
{"id":2,"src":"2.png","name":"Employee to Entrepreneur","author":"Steve Glaveski","duration":"15"},
{"id":3,"src":"3.png","name":"Doesn’t Hurt to Ask","author":"Trey Gowdy","duration":"13","noOfReads":"1.9"},
{"id":4,"src":"4.png","name":"The Fate of Food","author":"Amanda Little","duration":"12","noOfReads":"16"},
{"id":5,"src":"5.png","name":"Lives of the Stoics","author":"Ryan Holiday, Stephen Hansel","duration":"13"},
{
"id":6,
"src":"6.png",
"name":"Loving Your Business",
"author":"Debbie King",
"duration":"13"
},
{
"id":7,
"src":"7.png",
"name":"The Lonely Century",
"author":"Noreena Hertz",
"duration":"15"
},
{
"id":8,
"src":"8.png",
"name":"Eat Better, Feel Better",
"author":"Giada De Laurentiis",
"duration":"13",
"noOfReads":"1.9"
},
{
"id":9,
"src":"9.png",
"name":"Dropshipping",
"author":"James Moore",
"duration":"12"
}
]}`
const data= JSON.parse(currentBooksData);
const OPENBOOK= data.books;
export default OPENBOOK;