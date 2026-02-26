import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({ 
  end, 
  duration = 2000, 
  suffix = '',
  prefix = '',
  className = ''
}: CountUpProps) {
  const { count, ref } = useCountUp({ end, duration });

  return (
    <div ref={ref} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
}
