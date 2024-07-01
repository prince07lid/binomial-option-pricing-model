export const calculateOptionPrices = ({ S, K, T, r, sigma, N }) => {
    const dt = T / N;
    const u = Math.exp(sigma * Math.sqrt(dt));
    const d = 1 / u;
    const p = (Math.exp(r * dt) - d) / (u - d);
  
    // Initialize arrays to store option prices at each node
    const callPrices = Array(N + 1).fill(0);
    const putPrices = Array(N + 1).fill(0);
  
    // Calculate option prices at expiration
    for (let i = 0; i <= N; i++) {
      const ST = S * Math.pow(u, N - i) * Math.pow(d, i);
      callPrices[i] = Math.max(ST - K, 0);
      putPrices[i] = Math.max(K - ST, 0);
    }
  
    // Calculate option prices backward through the tree
    for (let n = N - 1; n >= 0; n--) {
      for (let i = 0; i <= n; i++) {
        callPrices[i] = Math.exp(-r * dt) * (p * callPrices[i] + (1 - p) * callPrices[i + 1]);
        putPrices[i] = Math.exp(-r * dt) * (p * putPrices[i] + (1 - p) * putPrices[i + 1]);
      }
    }
  
    return { callPrices, putPrices };
  };
  