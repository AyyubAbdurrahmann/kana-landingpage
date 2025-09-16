interface EmailConfig {
  to: string;
  subject: string;
  body: string;
}

export interface KanaDemoEmailParams {
  schoolName?: string;
  customMessage?: string;
}

interface ModalConfig {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

/**
 * Generate email template for Kana demo request
 */
export const generateKanaDemoEmail = (
  params: KanaDemoEmailParams = {}
): EmailConfig => {
  const { schoolName = "[Nama Sekolah]", customMessage = "" } = params;

  const emailTo = "ridsu.dev@gmail.com";
  const emailSubject = `Permintaan Demo/Informasi Kana untuk ${schoolName}`;
  const emailBody = `Halo tim Kana,
  
  Saya tertarik untuk menggunakan Kana di sekolah kami. Berikut adalah informasi yang bisa kami berikan:
  
  Nama Saya: 
  Jabatan: (misal: Kepala Sekolah, Guru, Staf IT)
  Nama Sekolah: 
  Jumlah Siswa yang Direncanakan: 
  Nomor Telepon: 
  Pesan Tambahan: ${
    customMessage ||
    '(misal: "Kami ingin tahu lebih lanjut tentang fitur nano learning," atau "Bagaimana cara kerja server on-premise?")'
  }
  
  Mohon infonya kapan kami bisa mendapatkan demo atau detail lebih lanjut.
  
  Terima kasih.
  
  [Nama Anda]`;

  return {
    to: emailTo,
    subject: emailSubject,
    body: emailBody,
  };
};

/**
 * Create mailto URL from email config
 */
export const createMailtoUrl = (config: EmailConfig): string => {
  const { to, subject, body } = config;
  return `mailto:${to}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

/**
 * Default modal configurations
 */
export const getDefaultModalConfigs = () => ({
  demo: {
    title: "Permintaan Demo Kana",
    message: `Terima kasih atas minat Anda pada Kana! 
  
  Untuk memulai, kami akan membuka aplikasi email Anda dengan template yang sudah diisi. Tim kami akan segera menghubungi Anda untuk menjadwalkan demo dan diskusi lebih lanjut.
  
  Apakah Anda ingin melanjutkan?`,
    confirmText: "Buka Email",
    cancelText: "Batal",
    confirmVariant: "primary" as const,
    size: "md" as const,
    showIcon: true,
  },
  success: {
    title: "Berhasil!",
    message:
      "Email berhasil dibuka. Silakan lengkapi informasi dan kirim email kepada kami.",
    confirmText: "OK",
    cancelText: "Tutup",
    confirmVariant: "success" as const,
    size: "sm" as const,
    showIcon: true,
  },
  error: {
    title: "Terjadi Kesalahan",
    message:
      "Maaf, tidak dapat membuka aplikasi email. Silakan kirim email manual ke ridsu.dev@gmail.com",
    confirmText: "OK",
    cancelText: "Tutup",
    confirmVariant: "danger" as const,
    size: "md" as const,
    showIcon: true,
  },
});

/**
 * Handle Kana demo email with custom modal
 */
export const handleKanaDemoEmailWithCustomModal = (
  showModal: (config: ModalConfig) => Promise<boolean>,
  params: KanaDemoEmailParams = {},
  modalConfig?: Partial<ModalConfig>
): void => {
  const defaultConfig = getDefaultModalConfigs().demo;
  const finalConfig = { ...defaultConfig, ...modalConfig };

  showModal(finalConfig).then((userConfirmed) => {
    if (userConfirmed) {
      try {
        const emailConfig = generateKanaDemoEmail(params);
        const mailtoUrl = createMailtoUrl(emailConfig);
        window.location.href = mailtoUrl;

        // Optional: Show success message after a brief delay
        setTimeout(() => {
          showModal(getDefaultModalConfigs().success);
        }, 100);
      } catch (error) {
        // Show error modal if something goes wrong
        showModal(getDefaultModalConfigs().error);
      }
    }
  });
};

/**
 * Legacy function for backward compatibility
 */
export const handleKanaDemoEmail = (params: KanaDemoEmailParams = {}): void => {
  const confirmationMessage = `Terima kasih atas minat Anda pada Kana. Untuk memulai, silakan klik OK untuk mengirim email kepada kami. Tim kami akan segera menghubungi Anda untuk menjadwalkan demo dan diskusi lebih lanjut.`;

  const userConfirmed = window.confirm(confirmationMessage);

  if (userConfirmed) {
    const emailConfig = generateKanaDemoEmail(params);
    const mailtoUrl = createMailtoUrl(emailConfig);
    window.location.href = mailtoUrl;
  }
};

// Export constants for reusability
export const EMAIL_CONFIG = {
  KANA_SUPPORT_EMAIL: "ridsu.dev@gmail.com",
  DEFAULT_SUBJECT_PREFIX: "Permintaan Demo/Informasi Kana untuk",
  CONFIRMATION_MESSAGE:
    "Terima kasih atas minat Anda pada Kana. Untuk memulai, silakan klik OK untuk mengirim email kepada kami. Tim kami akan segera menghubungi Anda untuk menjadwalkan demo dan diskusi lebih lanjut.",
} as const;
