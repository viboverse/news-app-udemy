"use client";

import { useRouter } from "next/navigation";

export default function ModalBackDrop() {
  const rout = useRouter();
  return <div className="modal-backdrop" onClick={rout.refresh} />;
}
