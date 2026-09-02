import { expect, test } from "@playwright/test";

test.describe("Sécurité et ownership des sessions Training & Server Actions", () => {
  test("API submit training quiz refuse une session persistante sans authentification (403)", async ({
    request,
  }) => {
    // Tentative de soumission d'une session persistante BDD (ObjectId) sans cookie de session
    const response = await request.post("/api/training/quiz-session/submit", {
      data: {
        sessionId: "64b8f0a0c9e77c1234567890",
        answers: [],
        targetScore: 80,
      },
    });

    expect(response.status()).toBe(403);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.message).toContain("Accès non autorisé");
  });

  test("API upload PDF d'annales refuse un utilisateur non authentifié (403)", async ({
    request,
  }) => {
    const formData = new FormData();
    formData.append(
      "file",
      new Blob(["%PDF-1.4 test content"], { type: "application/pdf" }),
      "test.pdf"
    );

    const response = await request.post("/api/exam-papers/upload", {
      multipart: {
        file: {
          name: "test.pdf",
          mimeType: "application/pdf",
          buffer: Buffer.from("%PDF-1.4 test"),
        },
      },
    });

    expect(response.status()).toBe(403);
    const body = await response.json();
    expect(body.error).toContain("Accès administrateur requis");
  });
});
