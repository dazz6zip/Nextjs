// 특정 경로에서만 사용하는 레이아웃 지정 가능
// 상쇄되는 것이 아닌 중첩되는 것!
export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy;Next JS is great{" "}
    </div>
  );
}
