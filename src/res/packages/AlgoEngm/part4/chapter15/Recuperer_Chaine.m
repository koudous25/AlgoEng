function [m] = Recuperer_Chaine(P,i,j)
if m(i,j)<inf
    m=m(i,j);
end
if i==j
    m(i,j)=0;
else
    for k=i:j-1
        q=Recuperer_Chaine(p,i,k)+ Recuperer_Chaine(p,k+1,j)+P(i-1)*P(k)*P(j);
        if q < m(i,j)
            m(i,j)=q;
        end
    end
end
end


