function Coslaw() {
    const a = parseFloat(document.getElementById("side_a").value);
    const b = parseFloat(document.getElementById("side_b").value);
    const c = parseFloat(document.getElementById("side_c").value) * (Math.PI / 100);

    const c_length = Math.sqrt(a * a + b * b - (2 * a * b * Math.cos(C)));
    document.getElementById("sidec").value = c_length.toFixed(2);
}