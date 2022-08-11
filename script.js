const url = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async ()=>{
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const bloggingsection = document.getElementById('blogging-section');

let s = 0, end = 20;

const addBlogs = async ()=>{
    const data = await fetchData();
    for(let i=0;i<20;i++){
        const ele= `
        <div class="mx-2 my-2 bg-white border-gray-800 border-2  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <div class="p-5">
                <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">${data[i].title}</h5>
                </a>
                <p class="font-normal  mb-3">
                    ${data[i].body}
                </p>
                <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                </a>
            </div>
        </div>
        `;
        bloggingsection.innerHTML += ele; 
        s=21;
        end=41;
    }
}

const loadMore = async () =>{
    const data = await fetchData();
    for(let i=s;i<end;i++){
        const ele= `
        <div class="mx-2 my-2 bg-white border-gray-800 border-2  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <div class="p-5">
                <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">${data[i].title}</h5>
                </a>
                <p class="font-normal  mb-3">
                    ${data[i].body}
                </p>
                <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                </a>
            </div>
        </div>
        `;
        bloggingsection.innerHTML += ele; 
        s=s+20;
        end=end=20;
    }
} 
addBlogs();
