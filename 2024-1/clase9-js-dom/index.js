function calaculateFinal(score1, score2, score3, score4) {
    const final = score1*0.3 + score2*0.3 + score3*0.3 + score4*0.1
    return final
}

function validations(score1, score2, score3, score4) {
    const finalScore = calaculateFinal(score1, score2, score3, score4)
    const container = document.getElementById("final-score-container")
    if(finalScore < 3) {
        container.innerHTML += `
        <div>
            <p><b>Tu nota es: </b>${finalScore}</p>
            <h1 class='red'>
                No pasaste la materia :( 
            </h1>
        </div>
        `
    } else if(finalScore >= 3 && finalScore < 4) {
        container.innerHTML += `
        <div>
            <p><b>Tu nota es: </b>${finalScore}</p>
            <h1 class='yellow'>
            Pasaste, pero por poco. Ojo ahi!
            </h1>
        </div>
        `
    } else {
        container.innerHTML += `
        <div>
            <p><b>Tu nota es: </b>${finalScore}</p>
            <h1 class='green'>
            Muy Bien
            </h1>
        </div>
        `
    }
}

validations(1,1,1,1)
validations(3.5,3.5,3.5,3.5)
validations(4.5,4.5,4.5,4.5)

function calculateTotal(price, taxes, delivery) {
    const total = price + taxes + delivery
    return total
}

function createInvoice(price, taxes, delivery) {
    const total = calculateTotal(price, taxes, delivery)
    const container = document.getElementById("invoice-container")

    if(price > 0) {
        container.innerHTML += `
        <div class="invoice-item">
            <p>Precio:</p>
            <p>$ ${price}</p>
        </div>
        `
    }

    if(taxes > 0) {
        container.innerHTML += `
        <div class="invoice-item">
            <p>Impuestos:</p>
            <p>$ ${taxes}</p>
        </div>
        `
    }

    if(delivery > 0) {
        container.innerHTML += `
        <div class="invoice-item">
            <p>Envio:</p>
            <p>$ ${delivery}</p>
        </div>
        `
    }

    if(total > 0) {
        container.innerHTML += `
        <div class="invoice-item">
            <p><b>Total:</b></p>
            <p>$ ${total}</p>
        </div>
        `
    }
}

createInvoice(5000, 10, 1000)