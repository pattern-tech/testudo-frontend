import React from 'react';

import QRCode from 'qrcode.react';

interface Props {
  data: string;
  size?: number;
}

const QRCodeSection = ({ data, size }: Props) => {
  return (
    <div className=" rounded-xl bg-onTertiary-light p-6">
      <QRCode value={data} size={size} />
    </div>
  );
};

export default QRCodeSection;
