import React from 'react';

import AccordionUsage from './Accordion';

export const Faq = () => {
  return (
    <div>
      <AccordionUsage
        items={[
          {
            title: 'What is Rosen Bridge?',
            description:
              'Rosen Bridge is an open-source protocol for cross-chain asset transfers. The protocol facilitates incentivized auditing, ongoing monitoring, and transparent reporting for asset transfers between blockchains.',
          },
          {
            title: 'What does becoming a watcher mean?',
            description:
              'Rosen Bridge is a 2nd layer authentication bridge that allows users to send and receive coins and tokens between Ergo and other blockchains. To ensure security there are two layers of security, watchers and guards; becoming a watcher in Rosen Bridge means actively monitoring the chains and triggering the events, while guards only verify the approved events. The watchers and guards have built-in redundancies, arming Rosen Bridge with multiple layers of security to protect users from potential exploits.',
          },
          {
            title:
              'Why should you use Testudo instead of running your own watcher?',
            description:
              'Running a watcher requires a technical understanding of how to set up your own node, plus you need to deal with the running maintenance of watchers and the fees that come with it. Testudo hides all of these complexities for you, helping you to streamline your process of becoming a watcher and earning rewards. Additionally, you cannot benefit from compound interest by running your own node since doing so requires reinvestment of funds when getting rewards, which is impossible without automation.',
          },
          {
            title: 'How does Testudo offer compound interest?',
            description:
              'Testudo asset aggregation system pools all rewards together and reinvests them into watchers, enabling those rewards to earn rewards. Doing so creates compound interest, resulting in higher yields than normal watchers.',
          },
          {
            title: 'How do we estimate the annual percentage yield (APY)?',
            description:
              'The APY (Annual Percentage Yield) is derived from historical rewards, considering that the daily reward quantity is correlated with the daily system volume and the reward amount, both of which are subject to frequent changes. Consequently, it is impractical to predict future rewards accurately. The estimated APY provides a projection based on past rewards, but it is important to note that this estimate does not assure or predict future APY values.',
          },
          {
            title: 'How does Testudo make money?',
            description:
              'We are committed to transparency, and as part of that commitment, it is important to outline how Testudo operates clearly. Currently, we have two revenue streams. Firstly, we collect a slippage fee on staked assets. The collected slippage covers network fees and swap slippage, and any surplus is recorded as revenue. Secondly, Testudo, acting as the pool operator, deducts a specified percentage (X%) from the rewards earned by the watchers. This deduction covers operational expenses, including server costs and maintenance. Any funds remaining after these expenses are also classified as revenue. It is worth noting that, as of now, Testudo does not impose an administrative fee for the management of the watchers.',
          },
        ]}
      />
    </div>
  );
};
