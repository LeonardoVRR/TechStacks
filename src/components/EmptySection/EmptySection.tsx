import FuzzyText from '../FuzzyText/FuzzyText'

export function EmptySection() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full h-full">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.3}
        enableHover={true}
        color="#000"
      >
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.3}
        enableHover={true}
        color="#000"
        fontSize={'clamp(1rem, 3vw, 4rem)'}
      >
        Not Found
      </FuzzyText>
    </div>
  )
}
