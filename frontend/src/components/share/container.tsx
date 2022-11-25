const Container = (props: any) => {
  const { children } = props;
  return (
    <div className="max-w-[1240px] pt-[50px] mx-auto">
      {children}
    </div>
  )
}

export default Container;