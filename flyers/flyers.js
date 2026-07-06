import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNtF5FWQ56QzfTpQEPImXEYfW0Ltl2WVc",
  authDomain: "capitalhires-172cb.firebaseapp.com",
  projectId: "capitalhires-172cb",
  storageBucket: "capitalhires-172cb.firebasestorage.app",
  messagingSenderId: "872662850984",
  appId: "1:872662850984:web:7c9a20e1f69c2fca1bd19d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



const buttons=document.querySelectorAll(".filter-btn");
const cards=document.querySelectorAll(".flyer-card");

buttons.forEach(button=>{

    button.onclick=()=>{

        document.querySelector(".active")
        .classList.remove("active");

        button.classList.add("active");

        const filter=button.dataset.filter;

        cards.forEach(card=>{

            if(
                filter==="all" ||
                card.dataset.category===filter
            ){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    };

});

const modal = document.getElementById("flyerModal");

const closeModal = document.querySelector(".close-modal");

const viewButtons = document.querySelectorAll(".view-details");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalCategory = document.querySelector(".modal-category");
const ratingFilter = document.getElementById("ratingFilter");

viewButtons.forEach(button => {

    button.addEventListener("click", e => {

        e.preventDefault();

        const card = button.closest(".flyer-card");

        const image = card.querySelector("img").src;
        const title = card.querySelector("h3").textContent;
        const description = card.querySelector("p").textContent;
        const category = card.querySelector("span").textContent;

        modalImage.src = image;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalCategory.textContent = category;

        modal.classList.add("show");

        loadReviews(title);

    });

});

closeModal.onclick = () => {

    modal.classList.remove("show");

};

modal.onclick = e => {

    if(e.target === modal){

        modal.classList.remove("show");

    }

};

ratingFilter.addEventListener("change",()=>{

    loadReviews(modalTitle.textContent);

});

const stars = document.querySelectorAll(".rating-select .star");

const ratingInput = document.getElementById("reviewStars");

stars.forEach(star=>{

    star.onclick=()=>{

        const rating=star.dataset.value;

        ratingInput.value=rating;

        stars.forEach(s=>{

            s.classList.remove("active");

            if(s.dataset.value<=rating){

                s.classList.add("active");

            }

        });

    };

});

const reviewForm = document.getElementById("reviewForm");

reviewForm.addEventListener("submit", async (e)=>{

    e.preventDefault();

    try{

        await addDoc(
            collection(db,"reviews"),
            {

                flyer: modalTitle.textContent,

                name: document.getElementById("reviewName").value,

                email: document.getElementById("reviewEmail").value,

                rating: Number(document.getElementById("reviewStars").value),

                comment: document.getElementById("reviewComment").value,

                createdAt: serverTimestamp()

            }
        );

        alert("Review submitted!");

        loadReviews(modalTitle.textContent);

        reviewForm.reset();

        document.getElementById("reviewStars").value=5;

        stars.forEach(s=>s.classList.add("active"));

}catch(error){

    console.error(error);

    alert(error.message);

}

});


async function loadReviews(flyer){

    const reviewsList = document.getElementById("reviewsList");

    const averageRating = document.getElementById("averageRating");

    const reviewCount = document.getElementById("reviewCount");

    const q = query(
        collection(db,"reviews"),
        orderBy("createdAt","desc")
    );

    const snapshot = await getDocs(q);

    let html = "";

    let total = 0;

    let count = 0;

snapshot.forEach(doc=>{

    const review = doc.data();

    const filter = ratingFilter.value;

    if(review.flyer !== flyer) return;

    if(filter !== "all" && review.rating != Number(filter))
        return;

    total += review.rating;

        count++;

const date = review.createdAt?.toDate
    ? review.createdAt.toDate().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })
    : "Just now";

const initials = review.name.charAt(0).toUpperCase();

html += `
<div class="review-card">

    <div class="review-top">

        <div style="display:flex;align-items:center;gap:14px;">

            <div class="review-avatar">
                ${initials}
            </div>

            <div>

                <div class="review-name">
                    ${review.name}
                </div>

                <div class="review-date">
                    ${date}
                </div>

            </div>

        </div>

        <span class="verified-badge">
            ✓ Verified Client
        </span>

    </div>

    <div class="review-stars">
        ${"★".repeat(review.rating)}
        ${"☆".repeat(5-review.rating)}
    </div>

    <p>
        ${review.comment}
    </p>

</div>
`;

    });

    reviewsList.innerHTML = html || "<p>No reviews yet.</p>";

    if(count){

        averageRating.textContent = (total/count).toFixed(1);

        reviewCount.textContent = `(${count} Reviews)`;

    }else{

        averageRating.textContent = "5.0";

        reviewCount.textContent = "(0 Reviews)";

    }

}

