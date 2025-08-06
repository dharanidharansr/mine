"use client"; // Mark the component as a Client Component for Next.js

import React, { useEffect, useState } from 'react';
import { TextEffect } from './ui/text-effect';

// Define the type for the quote data
interface Quote {
    quote: string;
    author: string;
}

const RandomQuote: React.FC = () => {
    const [quote, setQuote] = useState<string>('Loading...');
    const [author, setAuthor] = useState<string>('');

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
                headers: {
                    'X-Api-Key': 'pBsVXsyILoOPzv1k+5CwHQ==TKglbI6vMtRPLNl0'                    ,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: Quote[] = await response.json(); // API Ninjas returns an array of quotes
            if (data.length > 0) {
                setQuote(data[0].quote);
                setAuthor(data[0].author);
            } else {
                throw new Error('No quotes found in the response.');
            }
        } catch (error) {
            console.error('Error fetching quote:', error);
            setQuote('Error fetching quote. Please try again.');
            setAuthor('');
        }
    };

    useEffect(() => {
        // Fetch a quote on component mount
        fetchQuote();

        // Fetch a new quote every 10 seconds
        const interval = setInterval(fetchQuote, 1000000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <><div className='flex justify-center'>
            
                <TextEffect per='word' as='h3' preset='blur' children={quote} />
        </div>
        <div className='flex justify-end'>
            <TextEffect per='word' as='h3' preset='blur' children={`- ${author}`} />

        </div>
        </>
    );
};

const styles = {
    container: {
        textAlign: 'center' as const,
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        background: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    },
    quote: {
        fontSize: '1.5rem',
        color: '#555',
        marginBottom: '20px',
    },
    author: {
        fontSize: '1rem',
        color: '#888',
    },
};

export default RandomQuote;