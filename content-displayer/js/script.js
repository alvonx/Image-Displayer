function openNewPage(koalaid){
    window.open("../card.html?id="+koalaid, "_blank");
}

let initListOfTasks = () => {
    cardContainer = document.getElementById('image-card-container');

    var total_images = 8;

    container_data = '';
    for (i = 0; i < total_images; i++) {
        container_data += 
        `<div class="card text-center m-2 image-card" onclick="openNewPage(${i+1});" style="width: 18rem;">
            <img src="./content-displayer/images/image${i+1}.jpg" style="height:15rem; object-fit: contain;" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Koala ${i+1}</h5>
            </div>
        </div>`
    }

    cardContainer.innerHTML = container_data;
};

initListOfTasks();