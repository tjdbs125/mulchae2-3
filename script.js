const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYDj3kPXsxrhEVuMT1hE73xA-CaknNvJye2DweAqW-2fsZYFgIKq1juyAGYB8tCNW6bbF-nnRJbePHyETIGYKGhLyOI_1WGRlVQbe5VQWJLTFJIkghfBnnd8GRUVUC6s-uq-3v8RRPxOzjms8XNWhRIW_WGXEkkAXUjrOrklomv7YjvFElgzN9xFq5KEDK/s320/KakaoTalk_20240531_152224443_12.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj66XXIN8axN65WpjUHVlLTNavch1C7myRfUFrhSG1ZX8RqGEowwpIxOXVuc6Snu0LEgXxXqfTtSOJCZQmcDav_ZZZSvJdf0hslXlZcS1X18aUBHmAfMLyusULNByFzqGpTTlLRIdfL9AOLhVdnZomhEbBB9FI-GikaiyvgvHo6F0AlNh3sqgrT1gmuPnzv/s320/KakaoTalk_20240614_011119757.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1GFXZkNOtl_zb1wEVjZmjvTToo0Nlvw2Q8Fp3fjOm_PEWv5ZKs-SZrU-b0gy2PSHJQb-t09A-4dXTyyrvmtmKsoWAmRqoyCAVgSTR6pS8DJelwFTf9TF5v0YCQmZWAC7TfIBLCj5-HQ8p9Uv4jPNe09bAaAD92-hxdU3Cp0G2bb3ze_8QYw_HnaNa528u/s320/KakaoTalk_20240531_152224443_13.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAcNjvhZCfmZqu8PRLaHWKWQ2vn_mtJFXmmc0wO55YYmao_AuqhBvsjtKE-lQIaCnhZl2Pcm3gJ5iwxGoIMP4qrm3zowg_tkgP9ceq6oDy38alaPQvQQiDboR0MQvlKKNtF061Px10HyUyVWJuKUCrgUrLvgpSBayUVF5QKsW9UpIIgejtGX71wcXhRuAI/s320/KakaoTalk_20240614_011119757_01.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU0iY7TJnBbZcO5-2Ew8jEwM7YIGcEqhPzHhj0Ei11FHgwVMW63zZadbz4Q-gkQr2Jie4FDC7UjmNz3YzkEnpRXydoGEhptVijxoTbuj6r33Om98YAOx0edZmlwkHtqBP7iWnpA0Hqszb4x24rnP0k7IuW9jIflaAuLkh411b-ud-a__-uN57eEKKmaw_u/s320/KakaoTalk_20240531_152224443_14.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzVUVILGhSayf_vCKHhhmvjrqAD8fVkQ9PFU66XcbbEWmC61ABMyzAov3WgFNuSli9t7bqgiosJdaZA2P4Lfg-MIf2TNzwWTvuPx9d041OYSPSavCu0-6EErvtPqcnGVZpkYuCILzfFr8chzXmThoE1f0DwI2TlAOwAoRIFpNSy-p0d4pTcDKreNI_Ul1Y/s320/KakaoTalk_20240614_011119757_02.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSbTaWp6f9gUWADNkdSBCjsFKhphLFItTyhn1RUHPBqKRHcSOTwJdWoeEbIweIFtg0wN0yXNboOyawyH3xpCYUeecnyBJBrPbbVksfGGk5PgnF3M6m6ohQr8bwe6BY7-XEN3p4kbjHDMOrker1MyXdiOwVcFpayxUO4KCZBgJtXziPhYx0Oj1HkQ4AkfUB/s320/KakaoTalk_20240531_152224443_15.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQJFZUdlWr7UnKJ7_W6pKfgvtOw-0oeNj6jKErJyt9Zic56drrNUsIWYL4YGJoZ7-2wGF1zl5A0RXdFs6J4b20oG0lPgPfQZXBzrn2Vv7uPJSEzpmv63_pjWOfUkoGz-07KZTWPsr0WvufDn49egKY1sgENr039gsz-LKGbwQCihTSE-qvZSENGIc-W419/s320/KakaoTalk_20240614_011119757_03.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMux18P7vFfewFZXCvsPWGvQ4K-dvwYNuvz2gAbbHUO_jhlonce2gqemuK9ZNUc4rxumWEFb3HuDGIz1Vprb8DfM_ZMQe46nXDBs7rnWlV39G5ci0OcvtxnwRh2sKeuhojamNzMm6slGPfawSxbvHztGLNzFKrMbbjmCe9VPflyEYwY5dntL9gEcjuNUiw/s320/KakaoTalk_20240531_152224443_16.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjioKLwrpCsPhycAr1o5CMZkpjJQsrYFqr3jWoiL1YXAr68ie2XNQ2N70q_5lFL6_CnSI4w5Nakx6I_37sAL7ha33vnYBItagF32VV42XNfm7qcepekhiRG0F2W-p1LB4swxTr1XksrqvLHGO89N1lDWTsS-TOTw04Jnyn19Du79DX6ituwLYMBmzTS_AoA/s320/KakaoTalk_20240614_011119757_04.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_opRAovviyNGCMYghYzNWXlIurnSXoDlEyEFXqEXpf_IUlpz4F0PJIyqqv_QHX1j9JV1C6RvF59U7lpg4tt1G251IcytPi055Ysy5pCJXSDvdomMCwRfKzbh5k9dKBLC94vmSNSnu2zabgrSZynQUh9m6SKDOgLbt4EbXIEtNdloka2A2IePt0fiFrdSz/s320/KakaoTalk_20240531_152224443_17.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdiAtD9bNu6mkQujHiIEs51ID8rIF3tQU8s6cZJaRpsVBfLkw8rpAheahgdySDoC9kMQeUmBePb4JgHPTsTeIxxKTz4vfBwVp0eu6Gm0b1J1ECXfIUtkCSObm_YIimerZSz7b1gKX3UN_nV-BaFddim00yBwa56jcup_FjxZyqz2CQCn4QaLNRcjn_EK58/s320/KakaoTalk_20240614_011119757_05.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7Yui3ptevw9R83E8Ml2EDCUN7xXYfMcSKjhWpjuwcHzFxdSaHQOcM6tzsFtPIiugzYlKt6V4bmddkxKwMdQuMu4ZWQvy4QI32SfCFpmKLEL6-xs62TfOtoEAKOIumketCsDiUKiF7dqdGcpTiXz_aIMu79vRGteRjiJN23GCEbBje9lc4_N9tK5v0-AhB/s320/KakaoTalk_20240531_152224443_18.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDTj-_IskIFbd6Nm8ARsN2zIarw7JJZ52iDxW8z9tG5txEbWaNkHkFvnlWFeYBVurUM5xK0tCtB3K2YXbiobBLk_9I4dEN-pt529aJ9fMjyJ19OPFiurp4LmT50uQla3a87rDF_n3LC-38zTPHqmKG0wPD9VA_pJcSdq9oJzSZkfoeKdLKeXuoD18jg4Ko/s320/KakaoTalk_20240614_011119757_06.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYZuRFhlUdkcQDggUfhN1v9Ih1J_e-uYS0DmJWF7hnVN9IDv9MHdADWOMDo0PwuVC5nHCAWkRKqsCvuv93M14S1zlkwgobEoOLBAJrs553mr42Dx_XZV3uEZa42FoPC39TBRWQX1nVseys2eFDZxtLpNQ00xA7U7YkmAH4PX-9U2JdQEgSZ4wcSR7xaYHw/s320/KakaoTalk_20240531_152224443_19.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCugDHknYaQ3p8aoH-gzdtEu8u8CgcIuXRMZ22jOszlUniu_ZowHeXQRHclPPkvdda6UXapAgYolIzJsOoUrGX1tWc7VkvqDktl2at9-7sS5dPJkxAOtgBKx_eZs3HhBUJvGsn6Yv1Auzmwt5KT6oHeA27msyhuWXxiPn09KFCxRSDEoIKItbYWr93moQC/s320/KakaoTalk_20240614_011119757_07.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 9,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinJ6Cew36AZFdmM4wz0Gn5UVEEWwlBxMKYgoD-igfFfX9x8jvD4969VggGucc_LjNwST00rGEM6O6yXUr_aQv5Ype83nRASy8GYs9lIuhJzBCIcP0t5ddmragCMM0WTZ7185YCsTs7cTK870U4iaIBuc8ZCtdVbrt136l12pjGq6_3ZSPR1WU0c3VZfxAZ/s320/111.PNG",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeipA1tW9MjVRfI58zcd-G1dGxLR-KQx9gBnfkqCMNlhvRKRaKiwcxnmI9RKzXZwHDWhpxRosXUnTJF2ztf1VGxHDv0H2rGs66M6ZbI90PdxaBzXMvvFLrgKHo7tiHFAsG86xCsSZLOUIp7osD_RRhKciBdur5UvUrgQY_WQ16kveL-kPxTKNzdT4I-klP/s320/KakaoTalk_20240614_011119757_08.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 10,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK2z_9LNm79VE_EX8fuvS9dJspW46KYESJaTM8WEdPUu2kDrcCVSXaQPOOX99_X0-h2GRytwHF_oqgFJwOFHNFoQTbCIK3UcXSYHj6L-3nDMvAYSodWpH5Kj9OzkFhIqivyCVNDOcwFi9eBlxNalQanFIV3rH_NcPJAP6yH4rSZR_ynQPoaasminFYtxQM/s320/1212.PNG",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV-w3aOQvDH-b180E_kVNNPiZK39YtuNHeCdeUkMPoPh_QmfF4ZgNOKpHKJhmKSfBclIpSpOWopu5GQU1O54EfPhiZQs0mJ2Kpo3ku82wfkXIbJkX6CU8T5mRVXjUFJU0HbQougcOJckQls6zTdTHrbEtXHoLMr2z04TZz2sw7WOi0tTlzH0ZGoUDHaa9Y/s320/KakaoTalk_20240614_011119757_09.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();