const DonationForm = () => {
  return (
    <div className="w-full min-h-screen bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.7),rgba(28,0,0,0.8)),url('https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex flex-col items-center justify-center bg-cover bg-no-repeat">
    
      <div className="w-[80%] mx-auto bg-white rounded p-8 shadow-md ">
        <h2 className="text-2xl font-semibold mb-4 font-mono text-gray-700">
          Donate to our NGO
        </h2>
        <form className="">
          <div className="mb-4">
            <label
              htmlFor="donationType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Donation Type
            </label>
            <select
              id="donationType"
              name="donationType"
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="money">Money</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="currency"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              <option value="inr">INR</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number of Donations
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="1"
              step="1"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-500"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
