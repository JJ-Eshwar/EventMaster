import React, { FC } from 'react';

interface EventDetailProps {
  params: Promise<{ slug: string }>;
}

const EventDetail: FC<EventDetailProps> = async ({ params }) => {
  const { slug } = await params;

  return (
    <>
      <p>{slug}</p>
      <p>Page is building ...</p>
    </>
  );
}

export default EventDetail;