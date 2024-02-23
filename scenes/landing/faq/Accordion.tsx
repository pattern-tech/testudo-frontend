'use client';
import React, { useState } from 'react';

import { styled } from '@mui/material';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface Props {
  items: { title: string; description: string }[];
}

export default function AccordionUsage({ items }: Props) {
  const [expandedItems, setExpandedItems] = useState<boolean[]>([]);

  const handleExpansion = (index: number) => {
    setExpandedItems((prevExpandedItems) => {
      const newExpandedItems = [...prevExpandedItems];

      newExpandedItems[index] = !newExpandedItems[index];

      return newExpandedItems;
    });
  };

  const StyledAccordion = styled(Accordion)`
    background-color: ${({ theme }) => theme.palette.surfaceContainer.main};
    margin-bottom: 1.25rem;
    padding: 1.75rem 2rem;
    border-radius: 1.25rem;
    :first-of-type,
    :last-of-type {
      border-radius: 1.25rem;
    }
    ::before {
      content: none;
    }
    & .MuiAccordion-root {
      background-color: ${({ theme }) => theme.palette.surfaceContainer.main};
      box-shadow: none;
      &.Mui-expanded {
        margin: 0;
        .MuiAccordion-region {
          height: auto;
          margin-top: 0.75rem;
          .MuiAccordionDetails-root {
            display: block;
            padding: 0;
            p {
              font-weight: 500;
              font-size: 0.875rem;
              color: ${({ theme }) => theme.palette.onSecondaryContainer.main};
            }
          }
        }
      }
    }
    & .MuiAccordionSummary-root {
      padding: 0;
      min-height: auto;
      &.Mui-expanded {
        min-height: auto;
      }
    }
    & .MuiAccordionSummary-content {
      margin: 0;
      &.Mui-expanded {
        margin: 0;
      }
      & .MuiTypography-root {
        font-size: 1.25rem;
        font-weight: 800;
        line-height: normal;
      }
    }
    .MuiAccordion-region {
      height: 0;
      margin-top: 0;
      .MuiAccordionDetails-root {
        display: none;
      }
    }
  `;

  return (
    <>
      {items?.map((item, index) => (
        <StyledAccordion key={index}>
          <Accordion
            expanded={expandedItems[index] || false}
            onChange={() => handleExpansion(index)}
            slots={{ transition: Fade as AccordionSlots['transition'] }}
            slotProps={{ transition: { timeout: 400 } }}
          >
            <AccordionSummary
              expandIcon={
                <Image
                  src="images/arrowDown.svg"
                  alt="arrow down icon"
                  width={24}
                  height={24}
                />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        </StyledAccordion>
      ))}
    </>
  );
}
