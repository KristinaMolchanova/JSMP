import './index.scss';

function greeting(message: string) {
  document.body.innerHTML = `<h1>${message}</h1>`;
}

greeting('Hello World!');
