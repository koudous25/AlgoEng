function [a,m] = Chaine_Matrices_Recursif(P,i,j)
if i==j
    a=0;
end
m(i,j)=inf;
for k=i:j-1
    q=Chaine_Matrices_Recursif(P,i,k)+Chaine_Matrices_Recursif(P,k+1,j)+ P(i-1)*P(k)*P(j);
    if q < m(i,j)
        m(i,j)=q; 
    end
end
end

