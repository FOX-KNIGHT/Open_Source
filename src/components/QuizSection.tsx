"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export default function QuizSection() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      q: "What command creates a new branch and switches to it?",
      options: ["git branch new-branch", "git checkout -b new-branch", "git switch new-branch", "git push origin branch"],
      answer: 1
    },
    {
      q: "Which license requires you to disclose your source code if you distribute modified versions?",
      options: ["MIT License", "Apache 2.0", "GNU GPLv3", "Unlicense"],
      answer: 2
    },
    {
      q: "What is the best way to get a maintainer's attention on a PR?",
      options: ["Tag them repeatedly", "DM them on Twitter", "Follow CONTRIBUTING.md and wait patiently", "Open 5 duplicate PRs"],
      answer: 2
    }
  ];

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(idx);
    const correct = idx === questions[activeQuestion].answer;
    
    if (correct) {
      setScore(s => s + 1);
    }
    
    setTimeout(() => {
      if (activeQuestion < questions.length - 1) {
        setActiveQuestion(q => q + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#ccff00] py-24 px-4 md:px-16 border-y-8 border-black">
       <div className="flex flex-col items-center gap-4 mb-16 text-black text-center">
         <HelpCircle size={64} />
         <h2 className="font-archivo text-5xl md:text-7xl uppercase font-black">Knowledge Check</h2>
       </div>
       
       {!showResult ? (
         <div className="w-full max-w-4xl flex flex-col items-center">
           <div className="text-xl md:text-3xl font-mono font-bold text-center mb-12 bg-black text-white p-8 md:p-12 border-8 border-black w-full shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
             {activeQuestion + 1}. {questions[activeQuestion].q}
           </div>
           
           <div className="flex flex-col w-full gap-6">
             {questions[activeQuestion].options.map((opt, idx) => {
               let bgColor = "bg-white";
               let textColor = "text-black";
               let animate = {};
               
               if (selectedAnswer !== null) {
                 if (idx === questions[activeQuestion].answer) {
                   bgColor = "bg-green-500";
                   textColor = "text-white";
                 } else if (idx === selectedAnswer) {
                   bgColor = "bg-red-500";
                   textColor = "text-white";
                   animate = { x: [-10, 10, -10, 10, 0] };
                 }
               }
               
               return (
                 <motion.button 
                   key={idx}
                   animate={animate}
                   disabled={selectedAnswer !== null}
                   onClick={() => handleAnswer(idx)}
                   className={`w-full text-left p-6 md:p-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-archivo text-xl md:text-3xl uppercase transition-transform hover:-translate-y-2 ${bgColor} ${textColor} font-black active:translate-y-0 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]`}
                 >
                   {opt}
                 </motion.button>
               );
             })}
           </div>
         </div>
       ) : (
         <div className="w-full max-w-3xl text-center bg-black p-16 border-8 border-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
           <h3 className="font-archivo text-6xl md:text-8xl uppercase text-white mb-6 font-black">Quiz Complete!</h3>
           <p className="font-mono text-3xl md:text-4xl text-[#ccff00] font-bold">You scored {score} / {questions.length}</p>
         </div>
       )}
    </div>
  );
}
