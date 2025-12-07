const BASE = "http://localhost:5000/api";

/* ============================
   GET ROUTES
============================ */

export async function fetchServices() {
  const res = await fetch(`${BASE}/services`);
  return res.json();
}

export async function fetchTestimonials() {
  const res = await fetch(`${BASE}/testimonials`);
  return res.json();
}

export async function fetchPosts() {
  const res = await fetch(`${BASE}/posts`);
  return res.json();
}

export async function fetchPost(id) {
  const res = await fetch(`${BASE}/posts/${id}`);
  return res.json();
}

export async function addTestimonial(data) {
    const res = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const text = await res.text();
        console.error(text);
        throw new Error("Failed to add testimonial: " + text);
    }

    return res.json();
}



/* ============================
   BOOKING CREATION
============================ */

export async function createBooking(payload) {
  const res = await fetch(`${BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Booking failed: ${text}`);
  }

  return res.json();
}


/* ============================
   PAYMENT VERIFICATION
   (Flutterwave)
============================ */

export async function verifyPayment(tx_ref) {
  const res = await fetch(`${BASE}/verify/payment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tx_ref }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Payment verification failed: ${text}`);
  }

  return res.json();
}
