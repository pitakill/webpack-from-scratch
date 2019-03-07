export default function () {
  const example = document.getElementById('example')
  const newText = document.createTextNode('Hola Mundo')

  example.appendChild(newText)
}
