const {md5, createKeccak} = require("hash-wasm");

const frase = "Contratos Inteligentes: Hands on do episódio sobre hash.";
const ponto = ".";

async function hashs(){
	//frase
	const keccakFrase = await createKeccak(256);
	keccakFrase.update(frase);
	console.log("Keccak 256 da frase",keccakFrase.digest());
	//ponto
  const keccakPonto = await createKeccak(256);
	keccakPonto.update(ponto);
  console.log("Keccak 256 do ponto:",keccakPonto.digest());
	//md5
	console.log("MD5 da frase       :", await md5(frase));
}

hashs();
