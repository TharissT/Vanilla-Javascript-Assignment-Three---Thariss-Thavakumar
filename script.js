function Coslaw() {
    const a = parseFloat(document.getElementById("side_a").value);
    const b = parseFloat(document.getElementById("side_b").value);
    const C = parseFloat(document.getElementById("Angle").value) * (Math.PI / 180);

    const c_length = Math.sqrt(a * a + b * b - (2 * a * b * Math.cos(C)));
    document.getElementById("c_length").value = c_length.toFixed(2);
}