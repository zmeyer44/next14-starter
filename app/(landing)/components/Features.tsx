import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAmericasIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Fostering community.",
    description:
      "We are only as strong as our community. Partnering with Jewish student organizations multiplies our ability to be the change we want to see in the world.",
    icon: UserGroupIcon,
  },
  {
    name: "Speaking out.",
    description:
      "When radical university professors spread antisemetic lies to their student, we need to speak out and show the public what is happening.",
    icon: MegaphoneIcon,
  },
  {
    name: "Global impact.",
    description:
      "Antisemetism is not unique to the US. We must work beyond our borders to keep the world safe for Jews everywhere.",
    icon: GlobeAmericasIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                Making a Difference
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Stand up when it counts
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                During the violent, antisemitic protests that swept across
                college campuses in the US, our founding members took a
                courageous stand, upholding the values embodied by the American
                flag.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://o-0-o-image-storage.s3.amazonaws.com/holding+flag.jpeg"
              alt="holding flag"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
