import React, { createContext,useContext, useState } from 'react';

// Interface do Context
 interface ICounterText{
   count: number;
   setCount: any
 }
 const counterText: ICounterText = { count: 1, setCount: null}; 

 // Definição do Context
 const CountContext = createContext(counterText);


 // Componente que será utilizado para prover e ira englobar outros componentes que forem utilizar o context.
const CountProvider: React.FC = ({ children}) => {
  const [count, setCount] = useState(0);

  // Values contem o que será compartilhado, e o "children" é os componentes que irão utilizar essas propriedades
return <CountContext.Provider value={{count, setCount}} >{children}</CountContext.Provider>
}

export default CountProvider;

// Hook Próprio
export function useCounter(){
  // Context acima
  const context = useContext(CountContext);
  // Desestruturação e compartilhamento do context
  const { count, setCount } = context;

  return {count, setCount};
}