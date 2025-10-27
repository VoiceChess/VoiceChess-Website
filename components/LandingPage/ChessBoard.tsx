"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Pawn, Knight, Rook, Bishop, Queen, King } from './ChessPieces';

interface ChessPiece {
  id: string;
  type: 'pawn' | 'knight' | 'rook' | 'bishop' | 'queen' | 'king';
  position: { row: number; col: number };
  color: 'white' | 'black';
}

export default function ChessBoard() {
  const boardRef = useRef<HTMLDivElement>(null);
  const piecesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const initialPieces: ChessPiece[] = [
    // White pieces (bottom)
    { id: 'wk', type: 'king', position: { row: 7, col: 4 }, color: 'white' },
    { id: 'wq', type: 'queen', position: { row: 7, col: 3 }, color: 'white' },
    { id: 'wr1', type: 'rook', position: { row: 7, col: 0 }, color: 'white' },
    { id: 'wr2', type: 'rook', position: { row: 7, col: 7 }, color: 'white' },
    { id: 'wn1', type: 'knight', position: { row: 7, col: 1 }, color: 'white' },
    { id: 'wn2', type: 'knight', position: { row: 7, col: 6 }, color: 'white' },
    { id: 'wb1', type: 'bishop', position: { row: 7, col: 2 }, color: 'white' },
    { id: 'wb2', type: 'bishop', position: { row: 7, col: 5 }, color: 'white' },
    { id: 'wp4', type: 'pawn', position: { row: 6, col: 3 }, color: 'white' },
    { id: 'wp5', type: 'pawn', position: { row: 6, col: 4 }, color: 'white' },
    { id: 'wp7', type: 'pawn', position: { row: 6, col: 6 }, color: 'white' },

    // Black pieces (top)
    { id: 'bk', type: 'king', position: { row: 0, col: 4 }, color: 'black' },
    { id: 'bq', type: 'queen', position: { row: 0, col: 3 }, color: 'black' },
    { id: 'br1', type: 'rook', position: { row: 0, col: 0 }, color: 'black' },
    { id: 'br2', type: 'rook', position: { row: 0, col: 7 }, color: 'black' },
    { id: 'bn1', type: 'knight', position: { row: 0, col: 1 }, color: 'black' },
    { id: 'bn2', type: 'knight', position: { row: 0, col: 6 }, color: 'black' },
    { id: 'bb1', type: 'bishop', position: { row: 0, col: 2 }, color: 'black' },
    { id: 'bb2', type: 'bishop', position: { row: 0, col: 5 }, color: 'black' },
    { id: 'bp4', type: 'pawn', position: { row: 1, col: 3 }, color: 'black' },
    { id: 'bp5', type: 'pawn', position: { row: 1, col: 4 }, color: 'black' },
    { id: 'bp7', type: 'pawn', position: { row: 1, col: 6 }, color: 'black' },
  ];

  useEffect(() => {
    const squareSize = boardRef.current ? boardRef.current.offsetWidth / 8 : 64;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    // Move 1: White pawn e4 (e2 to e4)
    tl.to(piecesRef.current['wp5'], {
      y: -squareSize * 2,
      duration: 0.6,
      ease: 'power2.out',
    }, 0.5);

    // Move 2: Black pawn e5 (e7 to e5)
    tl.to(piecesRef.current['bp5'], {
      y: squareSize * 2,
      duration: 0.6,
      ease: 'power2.out',
    }, 1.8);

    // Move 3: White knight Nf3 (g1 to f3)
    tl.to(piecesRef.current['wn2'], {
      x: -squareSize,
      y: -squareSize * 2,
      duration: 0.7,
      ease: 'power2.inOut',
    }, 3.1);

    // Move 4: Black knight Nc6 (b8 to c6)
    tl.to(piecesRef.current['bn1'], {
      x: squareSize,
      y: squareSize * 2,
      duration: 0.7,
      ease: 'power2.inOut',
    }, 4.5);

    // Move 5: White bishop Bc4 (f1 to c4)
    tl.to(piecesRef.current['wb2'], {
      x: squareSize * 2,
      y: -squareSize * 3,
      duration: 0.8,
      ease: 'power3.out',
    }, 5.9);

    // Move 6: Black pawn d5 (d7 to d5)
    tl.to(piecesRef.current['bp4'], {
      y: squareSize * 2,
      duration: 0.6,
      ease: 'power2.out',
    }, 7.2);

    return () => {
      tl.kill();
    };
  }, []);

  const getSquareColor = (row: number, col: number) => {
    return (row + col) % 2 === 0 ? 'bg-[#E8D4A0]' : 'bg-[#A67C52]';
  };

  const getPieceComponent = (type: string) => {
    switch (type) {
      case 'pawn':
        return Pawn;
      case 'knight':
        return Knight;
      case 'rook':
        return Rook;
      case 'bishop':
        return Bishop;
      case 'queen':
        return Queen;
      case 'king':
        return King;
      default:
        return Pawn;
    }
  };

  return (
    <div ref={boardRef} className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Chess Board Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 border-4 border-accent/40 rounded-lg overflow-hidden shadow-2xl">
        {Array.from({ length: 64 }).map((_, index) => {
          const row = Math.floor(index / 8);
          const col = index % 8;
          return (
            <div
              key={index}
              className={`${getSquareColor(row, col)} transition-colors duration-300`}
            />
          );
        })}
      </div>

      {/* Chess Pieces */}
      {initialPieces.map((chessPiece) => {
        const PieceComponent = getPieceComponent(chessPiece.type);
        return (
          <div
            key={chessPiece.id}
            ref={(el) => {
              piecesRef.current[chessPiece.id] = el;
            }}
            className="absolute pointer-events-none select-none"
            style={{
              left: `${(chessPiece.position.col / 8) * 100}%`,
              top: `${(chessPiece.position.row / 8) * 100}%`,
              width: '12.5%',
              height: '12.5%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PieceComponent
              width={80}
              height={80}
              color={chessPiece.color === 'white' ? '#FFFFFF' : '#1a1a1a'}
              className="w-full h-full drop-shadow-lg"
            />
          </div>
        );
      })}
    </div>
  );
}
