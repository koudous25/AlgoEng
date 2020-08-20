function [e,racine] = Abr_Optimal(p,q,n)
for i=1:n+1
    e(i,i-1)=q(i-1);
    w(i,i-1)=q(i-1);
end
for l=1:n
    for i=1:n-l+1
        j=i+l-1;
        e(i,j)=inf;
        w(i,j)=w(i,j-1)+p(j)+q(j);
        for r=i:j
            t=e(i,r-1)+e(r+1,j)+ w(i,j);
            if t < e(i,j)
                e(i,j)=t;
                racine(i,j)=r;
            end
        end
    end
end
end

