import Image from 'next/image';

const Ourteam = () => {
  return (
    <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-32">
      <h2 className="text-4xl sm:text-65xl font-bold text-center">
        My team belives you deserve <br /> only the best.
      </h2>
      <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
        My team is committed to delivering excellence because <br /> I believe you deserve nothing less than the best.{' '}
      </h3>
      <div className="grid grid-cols-1 my-16 rounded">
        <Image src="/images/team/teamwork.jpg" alt="office-image" className="rounded" height={684} width={1296} />
      </div>
    </div>
  );
};

export default Ourteam;
