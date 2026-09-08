export default function SectionTitle({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-2 ${light ? 'text-primary-300' : 'text-primary-600'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl lg:text-4xl font-bold ${light ? 'text-white' : 'text-earth-900'}`}>
        {title}
      </h2>
      <div className={`mt-3 h-1 w-16 rounded-full ${centered ? 'mx-auto' : ''} ${light ? 'bg-primary-400' : 'bg-primary-500'}`} />
    </div>
  )
}