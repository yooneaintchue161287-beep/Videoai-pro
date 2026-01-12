export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$9", features: ["1 video / day"], popular: false },
    { name: "Pro", price: "$29", features: ["5 videos / day"], popular: true },
    { name: "Enterprise", price: "$99", features: ["Unlimited videos"], popular: false },
  ]

  return (
    <section className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className={`p-6 rounded bg-zinc-900 ${plan.popular ? "border-2 border-cyan-500" : ""}`}>
            {plan.popular && <div className="text-cyan-400 mb-2 font-bold">Most Popular</div>}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-lg my-2">{plan.price}/month</p>
            <ul className="mb-4">
              {plan.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <button className="px-4 py-2 bg-cyan-500 rounded text-black">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  )
}
