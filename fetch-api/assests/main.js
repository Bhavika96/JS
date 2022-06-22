const card = document.getElementById("card-row");


const response = fetch('https://www.omdbapi.com/?s=superman&apikey=7edb138f').then((data)=>{
    console.log(data);
    return data.json();
}).then((data2)=>{
    console.log(data2);

    // console.log("LN:10",data2.Search[3].Poster);
    // const { title, poster } = response;
    // console.log({title, poster });

    for(let i=0; i<data2.Search.length; i++) {
            const element = document.createElement("div");
            element.innerHTML = `<div class='card-box'>
            <div class='card'>
                <div class='image'>
                    <img src="${data2.Search[i].Poster}">
                </div>
                <h2 class='title'>${data2.Search[i].Title}</h2>
            </div>
        </div>`
        console.log("LN:24",element,card);
            card.append(element);
         }

    
})

// const listArray = [
//     {
//         image: "https://b.zmtcdn.com/data/pictures/chains/1/10571/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg",
//         title: "Batman"
//     },
//     {
//         image: "https://b.zmtcdn.com/data/pictures/chains/6/10506/6fa52a1c7dad34faa24f1bae4e7159de_o2_featured_v2.jpg",
//         title: "Superman"
//     },
//     {
//         image: "https://b.zmtcdn.com/data/pictures/chains/6/10506/6fa52a1c7dad34faa24f1bae4e7159de_o2_featured_v2.jpg",
//         title: "Dr Strange"
//     }
// ]

// for(let i=0; i<listArray.length; i++) {
   
//     const{image, title} = listArray[i];
//     const element = document.createElement("div");
//     element.className = "product-box";
//     element.innerHTML = `<div class='card-box'>
//     <div class='card'>
//         <div class='image'>
//             <img src="${image}">
//         </div>
//         <h2 class='title'>${title}</h2>
//     </div>
// </div>`
//     card.append(element);
// }

