<template>
    <div class="container h-screen bg-indigo-400 py-16">
      <div class="titulo">
        <h3>Calculadora.</h3>
      </div>
      <br/>
      <div class="section flex justify-center">
        <div class="w-1/3">
        <div class="p-4 text-right shadow-2xl rounded-t-lg bg-white">
          <p class="font-semibold text-gray-700 h-6">{{getOperacion}}</p>
          <p class="font-semibold text-gray-700 h-6">{{getResult}}</p>
          <p class="font-bold text-3xl text-gray-900 my-2">{{getResultado}}</p>
        </div>
        <div class="grid grid-cols-4 grid-rows-5 shadow-2xl rounded-b-lg">
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 col-span-2 hover:bg-indigo-600" @click="clickAC()">AC</button>
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="clickDEL()">DEL</button>
          <button class="h-16 text-xl text-white font-semibold bg-gray-700 border-gray-600 hover:bg-gray-800" @click="click('÷')">÷</button>
  
         <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('7')">7</button>
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('8')">8</button>
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('9')">9</button>
          <button class="h-16 text-xl text-white font-semibold bg-gray-700 border-gray-600 hover:bg-gray-800" @click="click('x')">x</button> 
  
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('4')">4</button>
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('5')">5</button>
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('6')">6</button>
          <button class="h-16 text-xl text-white font-semibold bg-gray-700 border-gray-600 hover:bg-gray-800" @click="click('+')">+</button> 
  
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('1')">1</button>
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('2')">2</button>
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('3')">3</button>
          <button class="h-16 text-xl text-white font-semibold bg-gray-700 border-gray-600 hover:bg-gray-800" @click="click('-')">-</button> 
  
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 col-span-2 hover:bg-indigo-600 rounded-bl-lg" @click="click('0')">0</button>
          <button class="h-16 text-xl text-white font-semibold bg-indigo-500 border-indigo-400 hover:bg-indigo-600" @click="click('.')">.</button>
          <button class="h-16 text-xl text-white font-semibold bg-gray-700 border-gray-600 hover:bg-gray-800 rounded-br-lg" @click="clickResultado()">=</button> 
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
    data() {
      return {
        getOperacion: '',
        getResult: '',
        getResultado: '0',
      }
    },
    methods: {
  
      clickAC() {
        this.getResultado = '0';
        this.getResult = '0';
        this.getOperacion = '';
      },
  
      clickDEL() {
        if( this.getResultado.length > 1) {
          this.getResultado = this.getResultado.substring(0, this.getResultado.length - 1);
        } else {
          this.getResultado = '0';
        }
      },
      click(par) {
        if(this.getResultado == '0') {
          this.getResultado = par;
        } else {
          this.getResultado += par;
        }
      },
      clickResultado() {
        let operacion = this.getResultado;
        this.getOperacion = operacion;
        operacion = operacion.replace('x', '*');
        operacion = operacion.replace('÷', '/');
        this.getResult = eval(operacion);
        this.getResultado = '0'
      }
    }
  }
  </script>
  
  <style>
  .container{
  
  }
  
  .titulo{
      padding: 20px;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
      /* box-shadow: inset 5px 5px 50px rgba(0, 0, 0, 0.9); */
  }
  
  /* .titulo:hover {
      padding: 20px;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
      box-shadow: inset 0px -20px 50px rgba(0, 0, 0, 0.2);
  } */
  
  button {
    border: 1px solid;
  }
  </style>