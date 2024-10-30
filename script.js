function Coslaw() {
    const a = parseFloat(document.getElementById("side_a").value);
    const b = parseFloat(document.getElementById("side_b").value);
    const C = parseFloat(document.getElementById("Angle").value) * (Math.PI / 180);

    const c_length = Math.sqrt(a * a + b * b - (2 * a * b * Math.cos(C)));
    document.getElementById("c_length").value = c_length.toFixed(2);
}

function calculateAsymptote() {
    const m = parseInt(document.getElementById('m').value);
    const n = parseInt(document.getElementById('n').value);
    let result;
    if (isNaN(m) || isNaN(n)) {
        result = "Please enter valid numbers for m and n.";
    } else if (m === n) {
        result = "The asymptote is horizontal";
    } else if (n > m) {
        result = "The asymptote is the x-axis";
    } else {
        const Difference = m - n;
        switch (Difference) {
            case 1:
                result = "The asymptote is Linear";
                break;
            case 2:
                result = "The asymptote is Quadratic";
                break;
            case 3:
                result = "The asymptote is Cubic";
                break;
            case 4:
                result = "The asymptote is Quartic";
                break;
            case 5:
                result = "The asymptote is Quintic";
                break;
            case 6:
                result = "The asymptote is Sextic";
                break;
            case 7:
                result = "The asymptote is Septic";
                break;
            case 8:
                result = "The asymptote is Octic";
                break;
            case 9:
                result = "The asymptote is Nonic";
                break;
            case 10:
                result = "The asymptote is Decic";
                break;
            default:
                result = "The asymptote is a higher degree polynomial";
        }
    }

    document.getElementById('AsymptoteType').value = result;
}

function calculatePi() {
    const n = parseInt(document.getElementById('nValue').value);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += (4 * ((-1) ** i) / (2 * i + 1));
    }
    document.getElementById('piApproximation').value = sum;
}